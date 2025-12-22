## Apache

Usar subdomínios dinâmicos com Apache é uma prática comum para configurar aplicações que exigem flexibilidade em seus subdomínios, como sistemas multiusuários. Aqui está um guia para configurar subdomínios dinâmicos com Apache:

* Habilitando o módulo mod_rewrite

Certifique-se de que o módulo mod_rewrite está habilitado no Apache. Execute o comando abaixo:

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

* Configurando VirtualHost com um subdomínio curinga

Crie ou edite um arquivo de configuração de Virtual Host. Ele geralmente está localizado em /etc/apache2/sites-available/. Crie um arquivo como dynamic-subdomains.conf:

```html
<VirtualHost *:80>
    ServerName exemplo.com
    ServerAlias *.exemplo.com

    DocumentRoot /var/www/exemplo.com/public

    <Directory /var/www/exemplo.com/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Passar o subdomínio como uma variável de ambiente
    RewriteEngine On
    RewriteCond %{HTTP_HOST} ^([^.]+)\.exemplo\.com$ [NC]
    RewriteRule ^ - [E=SUBDOMAIN:%1]

    # Log para depuração
    CustomLog ${APACHE_LOG_DIR}/dynamic_subdomains_access.log combined
    ErrorLog ${APACHE_LOG_DIR}/dynamic_subdomains_error.log
</VirtualHost>
```

* Habilite a Configuração do Virtual Host

Habilite a nova configuração e recarregue o Apache:

sudo a2ensite dynamic-subdomains.conf
sudo systemctl reload apache2

4. Utilize o Subdomínio no Código

O subdomínio extraído está disponível como uma variável de ambiente chamada SUBDOMAIN. No seu código, você pode acessá-lo, por exemplo, em PHP:

&lt;?php
$subdomain = getenv('SUBDOMAIN');
echo "O subdomínio atual é: " . htmlspecialchars($subdomain);

5. Adicione um Registro DNS Curinga

No painel de gerenciamento DNS do seu domínio, adicione um registro A ou CNAME que permita subdomínios dinâmicos. Por exemplo:

    Tipo: A
    Nome: *
    Valor: IP do servidor Apache
    TTL: Padrão (ex.: 3600)