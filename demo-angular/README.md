# Bio Design System - Angular Demo

Esta es una aplicación de demostración completa que muestra cómo instalar y usar todos los componentes del **Bio Design System** (`@madergk/bio-ds`) en un proyecto Angular.

## 🎯 Propósito

Esta demo sirve como:
- ✅ **Guía de instalación** - Muestra cómo configurar `@madergk/bio-ds` en Angular
- ✅ **Catálogo de componentes** - Demuestra todos los componentes disponibles
- ✅ **Ejemplos de código** - Código de referencia para implementar cada componente
- ✅ **Prueba de integración** - Verifica que el paquete funciona correctamente

## 📦 Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Instalar Bio Design System

El paquete `@madergk/bio-ds` ya está incluido en `package.json`:

```json
{
  "dependencies": {
    "@madergk/bio-ds": "^0.1.2"
  }
}
```

## 🚀 Ejecutar la demo

### Servidor de desarrollo

```bash
npm start
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

### Build de producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/bio-ds-demo/`.

## 🧩 Componentes demostrados

Esta aplicación incluye ejemplos de todos los componentes disponibles:

### Atoms (Componentes básicos)
- ✅ **Button** - Botones con variantes (primary, secondary, outline, text, danger) y tamaños
- ✅ **Alert** - Alertas de diferentes tipos (success, info, warning, danger)
- ✅ **Badge** - Etiquetas con múltiples variantes
- ✅ **Progress** - Barras de progreso con colores y etiquetas
- ✅ **Spinner** - Indicadores de carga
- ✅ **Input** - Campos de entrada básicos
- ✅ **PasswordInput** - Campos de contraseña con toggle de visibilidad
- ✅ **Textarea** - Áreas de texto multilinea
- ✅ **SearchBox** - Cajas de búsqueda con eventos

### Molecules (Componentes compuestos)
- ✅ **Accordion** - Paneles expandibles
- ✅ **Breadcrumb** - Navegación de migas de pan
- ✅ **ButtonGroup** - Grupos de botones
- ✅ **Dropdown** - Menús desplegables
- ✅ **ListGroup** - Listas de elementos
- ✅ **Modal** - Diálogos modales
- ✅ **Navbar** - Barras de navegación
- ✅ **Pagination** - Paginación
- ✅ **Toast** - Notificaciones temporales

## 💻 Cómo usar en tu proyecto

### Opción 1: Componentes Standalone (Recomendado para Angular 17+)

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, AlertComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ButtonComponent, AlertComponent],
  template: `
    <bio-button variant="primary" (click)="handleClick()">
      Click me
    </bio-button>

    <bio-alert type="success" [dismissible]="true">
      ¡Operación exitosa!
    </bio-alert>
  `
})
export class MyComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### Opción 2: Módulo completo (Tradicional)

```typescript
import { NgModule } from '@angular/core';
import { BioDesignSystemModule } from '@madergk/bio-ds';

@NgModule({
  imports: [BioDesignSystemModule],
  // ...
})
export class AppModule {}
```

## 📁 Estructura del proyecto

```
demo-angular/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Componente principal con todos los imports
│   │   ├── app.component.html     # Template con ejemplos de todos los componentes
│   │   ├── app.component.scss     # Estilos de la demo
│   │   └── app.config.ts          # Configuración de la aplicación
│   ├── index.html                 # HTML principal
│   └── main.ts                    # Bootstrap de la aplicación
├── angular.json                   # Configuración de Angular CLI
├── package.json                   # Dependencias del proyecto
└── README.md                      # Este archivo
```

## 📚 Ejemplos de código

### Botones

```html
<bio-button variant="primary" size="md" (click)="onButtonClick()">
  Primary Button
</bio-button>

<bio-button variant="secondary" [disabled]="true">
  Disabled Button
</bio-button>
```

### Formularios

```html
<bio-input
  placeholder="Ingresa tu nombre"
  [(ngModel)]="name">
</bio-input>

<bio-password-input
  placeholder="Contraseña"
  [(ngModel)]="password">
</bio-password-input>

<bio-textarea
  placeholder="Escribe un mensaje"
  [(ngModel)]="message">
</bio-textarea>
```

### Modal

```typescript
// Component
showModal = false;

openModal() {
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
}
```

```html
<!-- Template -->
<bio-button variant="primary" (click)="openModal()">
  Abrir Modal
</bio-button>

<bio-modal
  [isOpen]="showModal"
  title="Mi Modal"
  (close)="closeModal()">
  <p>Contenido del modal</p>
</bio-modal>
```

## 🎨 Personalización

Los componentes del Bio Design System utilizan design tokens para la personalización. Consulta la documentación principal del proyecto para más detalles sobre cómo personalizar colores, espaciado y tipografía.

## 🐛 Problemas conocidos

Si encuentras problemas al instalar o usar `@madergk/bio-ds`, revisa:
- [BUILD_ISSUES.md](../BUILD_ISSUES.md) - Problemas de compilación conocidos
- [INSTALLATION.md](../INSTALLATION.md) - Guía de instalación completa
- [Issues en GitHub](https://github.com/madergk/bio-ds/issues) - Reportar nuevos problemas

## 📖 Documentación adicional

- [README principal](../README.md) - Documentación general del Bio Design System
- [QUICK_START](../QUICK_START_DEPLOYMENT.md) - Guía rápida de inicio
- [TESTING](../TESTING.md) - Guía de testing
- [STORYBOOK](../STORYBOOK.md) - Documentación de Storybook

## 🔗 Enlaces útiles

- [Bio Design System en npm](https://www.npmjs.com/package/@madergk/bio-ds)
- [Repositorio en GitHub](https://github.com/madergk/bio-ds)
- [Angular CLI Documentation](https://angular.io/cli)

## 📝 Notas

- Esta demo usa Angular **17.x** para compatibilidad con `@madergk/bio-ds v0.1.2`
- Los componentes son standalone y pueden usarse de forma independiente
- Se requiere `FormsModule` para usar `[(ngModel)]` en los inputs

## 🤝 Contribuir

Si encuentras problemas o tienes sugerencias para mejorar esta demo, por favor abre un issue o pull request en el repositorio principal.

---

**Versión del paquete:** @madergk/bio-ds v0.1.2
**Angular:** 17.x
**Última actualización:** Diciembre 2025
