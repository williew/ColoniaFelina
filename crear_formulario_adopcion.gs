function crearFormularioAdopcion() {
  var form = FormApp.create('Formulario de Adopción – Colonia Felina');

  form.setDescription(
    'Somos un grupo de personas que cuida una colonia de 12 gatos callejeros. ' +
    'Los atrapamos, esterilizamos, vacunamos y volvemos a liberar (método TNVR). ' +
    'También los alimentamos diariamente.\n\n' +
    'Algunos de estos gatos pueden ser adoptados para darles una vida hogareña. ' +
    'Se trata de gatos semisalvajes: algunos toleran el contacto humano y otros no. ' +
    'El proceso requiere paciencia y un período de socialización en el hogar.\n\n' +
    'Completá este formulario si estás interesado/a en adoptar. ' +
    'Nos pondremos en contacto para contarte más detalles.\n\n' +
    '📷 Conocé a los gatos de la colonia antes de completar el formulario: https://TU-SITIO-AQUI.com'
  );

  form.setCollectEmail(false);
  form.setProgressBar(false);
  form.setConfirmationMessage(
    '¡Gracias por tu interés! Revisaremos tu formulario y nos pondremos en contacto a la brevedad.'
  );

  // ── SECCIÓN 1: Datos de contacto ──────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('1. Datos de contacto')
    .setHelpText('Necesitamos estos datos para poder comunicarnos con vos.');

  form.addTextItem()
    .setTitle('Nombre y apellido')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Número de teléfono / WhatsApp')
    .setRequired(true)
    .setHelpText('Incluí el código de área. Ej: 011 15-1234-5678');

  form.addTextItem()
    .setTitle('Correo electrónico')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Ciudad / Localidad donde vivís')
    .setRequired(true);

  // ── SECCIÓN 2: Tu vivienda ────────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('2. Tu vivienda')
    .setHelpText('Esta información nos ayuda a evaluar el ambiente para el gato.');

  form.addMultipleChoiceItem()
    .setTitle('¿En qué tipo de vivienda vivís?')
    .setChoiceValues([
      'Casa con patio o jardín',
      'Casa sin patio',
      'Departamento',
      'Otro'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Tenés balcón, terraza o ventanas sin protección?')
    .setChoiceValues([
      'No',
      'Sí, y puedo colocar malla/red de seguridad',
      'Sí, pero no podría colocar protección',
      'No aplica'
    ])
    .setRequired(true)
    .setHelpText('Los gatos semisalvajes pueden intentar escapar. Las redes de seguridad son fundamentales.');

  form.addMultipleChoiceItem()
    .setTitle('¿Vivís solo/a o con más personas?')
    .setChoiceValues([
      'Solo/a',
      'Con pareja / adultos',
      'Con niños pequeños (menores de 8 años)',
      'Con adolescentes',
      'Con adultos mayores'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Todos los convivientes están de acuerdo con la adopción?')
    .setChoiceValues([
      'Sí, todos',
      'La mayoría sí',
      'Todavía no lo hablé con todos'
    ])
    .setRequired(true);

  // ── SECCIÓN 3: Animales en el hogar ──────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('3. Animales en tu hogar');

  form.addMultipleChoiceItem()
    .setTitle('¿Tenés actualmente animales en tu hogar?')
    .setChoiceValues([
      'No',
      'Sí, gatos',
      'Sí, perros',
      'Sí, gatos y perros',
      'Sí, otros animales'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Si tenés animales, contanos un poco sobre ellos')
    .setHelpText('Raza, edad, carácter, si están castrados/esterilizados, si conviven bien con otros animales, etc. Si no tenés, dejá en blanco.');

  // ── SECCIÓN 4: Experiencia con animales ──────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('4. Tu experiencia con animales');

  form.addCheckboxItem()
    .setTitle('¿Qué experiencia previa tenés con animales? (podés marcar varias)')
    .setChoiceValues([
      'Tuve gatos de pequeño/a en mi familia',
      'Adopté gatos adultos antes',
      'Adopté gatos cachorros antes',
      'Trabajé o fui voluntario/a en refugios o rescates',
      'Tuve experiencia con animales semisalvajes o ferales',
      'Nunca tuve animales propios'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Sabés qué es la socialización de un gato feral o semisalvaje?')
    .setChoiceValues([
      'Sí, tengo experiencia con este proceso',
      'Lo leí o me informé, pero no lo practiqué',
      'No, pero estoy dispuesto/a a aprender',
      'No sabía que era necesario'
    ])
    .setRequired(true);

  // ── SECCIÓN 5: Disposición y expectativas ────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('5. Disposición y expectativas')
    .setHelpText(
      'Los gatos de la colonia son semisalvajes. Algunos permiten caricias, otros no. ' +
      'El proceso de adaptación puede llevar semanas o meses. Es fundamental tener paciencia.'
    );

  form.addMultipleChoiceItem()
    .setTitle('¿Entendés que el proceso de socialización puede durar varios meses?')
    .setChoiceValues([
      'Sí, lo entiendo y estoy preparado/a',
      'Sí, aunque me gustaría más información al respecto',
      'Creía que sería más rápido'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Tenés un espacio donde el gato pueda estar confinado los primeros días/semanas (habitación, baño, cuarto)?')
    .setChoiceValues([
      'Sí, tengo un espacio ideal',
      'Sí, puedo acondicionar uno',
      'No, no cuento con ese espacio'
    ])
    .setRequired(true)
    .setHelpText('El confinamiento inicial es clave para que el gato se adapte de a poco sin estresarse.');

  form.addMultipleChoiceItem()
    .setTitle('¿Podés comprometerte a mantener al gato en interior (sin salida a la calle)?')
    .setChoiceValues([
      'Sí, lo mantendría 100% en interior',
      'Sí, con salida controlada a patio/balcón protegido',
      'Me costaría mantenerlo solo en interior',
      'Prefiero que tenga acceso a la calle'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué harías si el gato no logra adaptarse después de varios meses?')
    .setChoiceValues([
      'Seguiría intentando con ayuda profesional (etólogo, veterinario)',
      'Lo devolvería para que sigan intentando adoptarlo',
      'No lo sé todavía',
      'Lo devolvería a la colonia'
    ])
    .setRequired(true);

  // ── SECCIÓN 6: Cuidados y compromiso ─────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('6. Cuidados y compromiso a largo plazo');

  form.addMultipleChoiceItem()
    .setTitle('¿Podés asumir los gastos veterinarios del gato (vacunas, castración si aplica, consultas)?')
    .setChoiceValues([
      'Sí, sin problema',
      'Sí, con planificación',
      'Dependería de los montos',
      'No estoy seguro/a'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué harías si tuvieras que mudarte o si tu situación cambiara?')
    .setChoiceValues([
      'Me llevaría al gato siempre',
      'Buscaría un nuevo hogar responsable para él',
      'No lo sé todavía'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('¿Por qué querés adoptar un gato de la colonia? (podés marcar varias)')
    .setChoiceValues([
      'Quiero darle una oportunidad a un animal que lo necesita',
      'Me gustan los gatos independientes',
      'Quiero compañía pero respetando el ritmo del animal',
      'Ya adopté animales en situación vulnerable antes',
      'Me informé sobre el método TNVR y quiero apoyar',
      'Otro'
    ])
    .setRequired(true);

  // ── SECCIÓN 7: Preferencias ───────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('7. Preferencias (orientativas)');

  form.addMultipleChoiceItem()
    .setTitle('¿Tenés preferencia de sexo?')
    .setChoiceValues([
      'Macho',
      'Hembra',
      'Me es indistinto'
    ])
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('¿Preferís adoptar uno o dos gatos?')
    .setChoiceValues([
      'Uno solo',
      'Dos (para que se hagan compañía)',
      'No tengo preferencia'
    ])
    .setRequired(false)
    .setHelpText('A veces adoptar dos gatos juntos facilita la socialización.');

  // ── SECCIÓN 8: Comentarios libres ────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('8. Contanos más sobre vos');

  form.addParagraphTextItem()
    .setTitle('¿Hay algo más que quieras contarnos sobre vos, tu hogar o tus expectativas?')
    .setHelpText('Cualquier información adicional es bienvenida.');

  form.addParagraphTextItem()
    .setTitle('¿Tenés alguna pregunta para nosotros?');

  // ── Resultado ─────────────────────────────────────────────────────────────
  var url = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('✅ Formulario creado exitosamente');
  Logger.log('🔗 URL para compartir: ' + url);
  Logger.log('✏️  URL de edición:    ' + editUrl);
}
