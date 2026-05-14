#!/bin/bash
echo ""
echo "Publicando alterações no site..."
echo ""
git add .
git commit -m "Atualização de conteúdo"
git push
echo ""
echo "Pronto! O site será atualizado em alguns minutos."
echo ""
