@echo off
pushd Client
dotnet publish -c Release
popd

pushd Server
dotnet publish -c Release
popd

rmdir /s /q smartphone
mkdir smartphone

copy /y fxmanifest.lua smartphone
xcopy /y /e Client\bin\Release\net452\publish smartphone\Client\bin\Release\net452\publish\
xcopy /y /e Server\bin\Release\netstandard2.0\publish smartphone\Server\bin\Release\netstandard2.0\publish\

pushd ui
pnpm run build

pause