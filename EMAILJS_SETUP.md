# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu email (es gratis hasta 200 correos/mes)

### 2. Conectar tu servicio de email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Copia el **SERVICE_ID** que aparece

### 3. Crear un template de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa esta plantilla:

```
Asunto: Nuevo contacto desde tu portafolio

Hola {{to_name}},

Tienes un nuevo contacto desde tu portafolio:

Email: {{user_email}}

---
Enviado desde tu portafolio web
```

4. Guarda el template y copia el **TEMPLATE_ID**

### 4. Obtener tu Public Key
1. Ve a **"Account"** en el menú
2. En la sección **"General"**, encontrarás tu **Public Key**
3. Cópiala

### 5. Configurar las variables de entorno
Abre el archivo `.env.local` y reemplaza los valores:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Reiniciar el servidor de desarrollo
```bash
npm run dev
```

## ¡Listo!
Ahora cuando alguien envíe su correo desde tu portafolio, te llegará directamente a tu email configurado. ✉️

## Notas importantes:
- ⚠️ **NO subas el archivo `.env.local` a GitHub** (ya está en .gitignore)
- ✅ El límite gratuito es de 200 emails/mes
- ✅ Los correos llegarán al email que conectaste en el paso 2
