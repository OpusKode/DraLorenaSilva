@echo off
echo.
echo Publicando alteracoes no site...
echo.
git add .
git commit -m "Atualizacao de conteudo"
git push
echo.
echo Pronto! O site sera atualizado em alguns minutos.
echo Voce pode fechar esta janela.
echo.
pause
