using System.Threading.Tasks; 
using CitizenFX.Core; 
using static CitizenFX.Core.Native.API;

namespace phoneScript.Client {
    public class ClientMain : BaseScript {
        private bool _isUiOpen;

        public ClientMain() {
            Tick += OnTick;
        }

        private async Task OnTick() {
            if (IsControlJustPressed(0, 288)) { 
                _isUiOpen = !_isUiOpen;
                string json = "{\"type\":\"" + (_isUiOpen ? "open" : "close") + "\"}";
                SetNuiFocus(_isUiOpen, _isUiOpen);
                SetNuiFocusKeepInput(true);
                SendNuiMessage(json);
                Debug.WriteLine($"UI {_isUiOpen} ");
            }
            await Task.FromResult(0);
        }
    }
}