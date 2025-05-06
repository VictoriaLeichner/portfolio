import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "document-management-portal",
    title: "Portal de Gestión de Documentos",
    shortDescription: "Automatización del seguimiento de documentos para subcontratistas y fleteros.",
    longDescription: `Este portal web fue desarrollado para la empresa LP Pietroboni con el objetivo de optimizar la gestión de documentación de subcontratistas y fleteros. Permite a los usuarios cargar archivos en formato PDF, como carnets de conducir y seguros, asociándolos a su respectiva fecha de vencimiento. El sistema se encarga de enviar notificaciones automáticas por correo electrónico cuando un documento está próximo a vencer o ya ha caducado, tanto al usuario como al administrador.

El proyecto fue implementado con un backend desarrollado en Node.js, que gestiona la lógica del sistema y el envío de notificaciones. El frontend se construyó con React, ofreciendo una interfaz simple, intuitiva y adaptable a distintos dispositivos. Para el almacenamiento de los documentos y su información asociada se utilizó MariaDB como base de datos. Además, se configuraron distintos accesos para usuarios y administradores, permitiendo una gestión ordenada y segura de los registros.`,
    tags: ["React", "Node.js", "MariaDB"],
    image: "/fotos/PPS1.png",
    images: ["/fotos/PPS1.png", "/fotos/PPS2.png", "/fotos/PPS3.png"],
  },
  {
    id: "classroom-assignment-system",
    title: "Sistema de Asignación Automática de Aulas",
    shortDescription: "Plataforma inteligente para la gestión eficiente de aulas en instituciones educativas.",
    longDescription: `Este sistema fue diseñado para automatizar la asignación de aulas en función de diversos criterios como capacidad, disponibilidad horaria y requerimientos específicos de cada comisión. 

    Se desarrolló un sistema para automatizar la asignación de aulas en instituciones educativas, teniendo en cuenta criterios como capacidad, disponibilidad horaria y requerimientos específicos de cada comisión. El frontend se implementó con Angular, utilizando Angular Material para construir una interfaz moderna, modular y responsive. Por su parte, el backend se desarrolló con Spring Boot, exponiendo una API RESTful para la gestión de usuarios, aulas y horarios, con PostgreSQL como base de datos.

Para la asignación automática de aulas se diseñó e implementó un algoritmo genético en Python, capaz de optimizar la distribución de espacios respetando múltiples restricciones y variables, logrando asignaciones eficientes en función de las necesidades de la institución. Además, el sistema se integra con SIU Guaraní para obtener datos actualizados y utiliza Java Mail para notificar automáticamente a docentes y estudiantes sobre las asignaciones.

La gestión de autenticación y permisos se resolvió con Keycloak, permitiendo controlar los accesos según los distintos roles definidos en la aplicación.`,
    tags: ["Angular", "Spring Boot", "PostgreSQL", "Python", "Keycloak"],
    image: "/fotos/PFC1.png",
    images: ["/fotos/PFC1.png", "/fotos/PFC2.png", "/fotos/PFC3.png"],
  },
  {
    id: "crypto-management-app",
    title: "Aplicación de Gestión de Criptomonedas",
    shortDescription:
      "Plataforma de escritorio para el seguimiento y notificación de precios de criptomonedas en tiempo real.",
    longDescription: `Se desarrolló una aplicación de escritorio en C# utilizando WinForms, orientada al monitoreo y gestión de criptomonedas. La aplicación consume datos en tiempo real desde la API de CoinCap, permitiendo visualizar información actualizada sobre distintas criptomonedas y consultar detalles específicos de cada una.

Entre sus funcionalidades, permite a los usuarios marcar criptomonedas favoritas, establecer rangos de precio personalizados y recibir notificaciones automáticas —tanto en la aplicación como por correo electrónico— cuando los precios superan o descienden de los valores definidos. Además, se integraron gráficos de tendencias que facilitan el seguimiento de la evolución del mercado.

Para la gestión de usuarios y almacenamiento de datos, se incorporó Supabase, garantizando una sincronización eficiente y un acceso seguro a la información.`,
    tags: ["C#", "WinForms", "Supabase"],
    image: "/fotos/Crypto1.png",
    images: ["/fotos/Crypto1.png", "/fotos/Crypto2.png", "/fotos/Crypto3.png"],
  },
]
