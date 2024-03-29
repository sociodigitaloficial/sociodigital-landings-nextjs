const useMailData = (leadData, clientData) => {

    let days = clientData.days;
    let hours = clientData.hours;
    let messageOK = `Acabamos de recibir tu solicitud de asesoría y te contactaremos en breves minutos.`;
    let messageEvening = `Lamentablemente debido a que ya terminamos nuestra jornada de asesorías no estamos atendiendo solicitudes en este preciso momento, pero te enviaremos un mensaje por whatsapp el próximo día hábil a primera hora sin falta.`;
    let messageMorning = `Durante la jornada de hoy nos contactaremos contigo vía whatsapp. Cuando te enviemos el mensaje comenzaremos la asesoría, así conoceremos tus productos o servicios, conversaremos sobre las posibilidades que te ofrece la publicidad, la inversión necesaria y los posibles resultados, ¡hablamos pronto!`;
    let messageWeekend = `Lamentablemente debido a que es fin de semana no estamos atendiendo solicitudes en este preciso momento, pero te enviaremos un mensaje por whatsapp el próximo día hábil sin falta.`;
    const today = new Date();
    let date = today.toLocaleString();

    function getMessage(){
        if(days[today.getDay()]){
          if(today.getHours() > hours[0]){
            if(today.getHours() < hours[1]){
              return messageOK;
            } else {
              return messageEvening;
            }
          } else {
            return messageMorning;
          }
        } else {
          return messageWeekend;
        }
    };

    const clientMail = {
        from: `"Socio Digital" <${process.env.SOCIODIGITAL_NOTIFICATION_MAIL}>`,
        to: clientData.email,
        subject: `${clientData.name} has recibido un NUEVO CONTACTO`,
        text: `Hola ${clientData.name}, gracias a la campaña de publicidad digital que actualmente tienes online has recibido un nuevo contacto interesado en tus servicios:`,
        html: `<html>
                <body>
                  <p>Hola ${clientData.name}, gracias a la campaña de publicidad digital que actualmente tienes online has recibido un nuevo contacto interesado en tus servicios:</p>
                  <table rules="all" border="1" style="border-color: #666;" cellpadding="10">
                    <tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>${leadData.name}</td></tr>
                    <tr><td><strong>Correo:</strong> </td><td>${leadData.email}</td></tr>
                    <tr><td><strong>Whatsapp:</strong> </td><td>${leadData.phone}</td></tr>
                    <tr><td><strong>Cuéntanos tu caso:</strong> </td><td>${leadData.message}</td></tr>
                    <tr><td><strong>Servicio:</strong> </td><td>${clientData.landing}</td></tr>
                    <tr><td><strong>Fecha:</strong> </td><td>${date}</td></tr>
                  </table>
                  <p>Recomendaciones para hacer más exitosa la gestión de los nuevos contactos:</p>
                    <ul>
                      <li>Llama a los  contactos tan rápido como sea posible.</li>
                      <li>Siempre prefiere la llamada telefónica antes que un correo o whatsapp (a menos que no haya otra opción).</li>
                      <li>Utiliza un CRM para gestionar mejor tus contactos.</li>
                      <li>Utiliza correos corporativos de G-Suite antes que los gratuitos de hosting.</li>
                      <li>Si presionas responder a este mail estarás respondiendo a tu potencial cliente automáticamente.</li>
                      <li>Revisa constantemente tu bandeja de spam, hay ocaciones en que las notificaciones de nuevos contactos caeran ahí.</li>
                      <li>Si este correo cayó en la bandeja de spam o aparece como no seguro, debes marcarlo como no es spam o como correo seguro, así las notificaciones llegarán a tu bandeja principal constantemente.</li>
                      <li>Si encuentras un error o sientes que algo no está funcionando con la campaña publicitaria debes dar aviso inmediatamente.</li>
                    </ul>
                  </body>
                </html>`
    };

    const prospectMail = {
        from: `"${clientData.name}" <${process.env.SOCIODIGITAL_NOTIFICATION_MAIL}>`,
        to: leadData.email,
        subject: `Hemos recibido tu solicitud exitosamente`,
        text: `Hola ${leadData.name}, gracias por confiar en nosotros y solicitar una asesoría en publicidad digital.`,
        html: `<html>
                <body>
                  <p>Hola ${leadData.name}, gracias por confiar en nosotros y solicitar una asesoría en publicidad digital.</p>
                  <p>${getMessage()}</p>
                  <p>Cuando te enviemos el mensaje comenzaremos la asesoría, así conoceremos tus productos o servicios, conversaremos sobre las posibilidades que te ofrece la publicidad, la inversión necesaria y los posibles resultados, ¡hablamos pronto!</p>
                  <p>Si deseas contactar inmediatamente con nosotros, dispones de los siguientes métodos de comunicación:</p>
                  <ul>
                    <li>Llámanos o escríbenos un whatsapp al número ${clientData.number}.</li>
                    <li>Envíanos un correo directamente a ${clientData.email} o respondiendo este mail.</li>
                  </ul>
                  <p>Ante cualquier duda o consulta estaremos atentos. ¡Saludos!.</p>
                </body>
              </html>`
    };

    return {
        clientMail,
        prospectMail
    }
}

export default useMailData;