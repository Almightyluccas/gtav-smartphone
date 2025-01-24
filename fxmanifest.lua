fx_version 'cerulean'
game 'gta5'

file 'Client/bin/Release/**/publish/*.dll'

client_script 'Client/bin/Release/**/publish/*.net.dll'
server_script 'Server/bin/Release/**/publish/*.net.dll'

files {
    'ui/index.html',
    'ui/assets/**/*',
}

ui_page 'ui/index.html'

author 'You'
version '1.0.0'
description 'Example Resource from C# Template'