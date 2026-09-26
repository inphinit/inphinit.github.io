@echo off

php -S localhost:5009 -t "%~dp0\dist"

pause
