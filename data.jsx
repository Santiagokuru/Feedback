// Datos de un roleplay completado
const evaluationData = {
  scenario: {
    title: "Conversación difícil sobre bajo desempeño",
    track: "Liderazgo · Conversaciones difíciles",
    duration: "12 min 04 s",
    completedAt: "Hoy · 16:42",
    persona: "Carla, colaboradora del equipo",
    objective: "Abordar la caída de desempeño con empatía, dejando próximos pasos claros."
  },
  summary: {
    achieved: 4,
    total: 6,
    headline: "Buen progreso, Lucía.",
    body: "Lograste 4 de los 6 pasos del modelo. Tu apertura fue cálida y concreta. Te quedan dos áreas con espacio para crecer: validar emociones antes de proponer, y cerrar con compromisos verificables."
  },
  steps: [
    {
      id: 1,
      title: "Apertura clara y empática",
      status: "achieved",
      summary: "Encuadraste la conversación con cuidado y nombraste el motivo sin rodeos.",
      did: "“Carla, agendé este espacio porque quiero hablar contigo de cómo te has sentido y de algunos resultados que vimos en marzo. Te escucho primero.”",
      feedback: "Excelente equilibrio entre claridad e invitación a conversar. Evitaste el tono de juicio y diste espacio para que ella tomara la palabra.",
      tips: [
        { text: "Mantén esta estructura: contexto + intención + invitación.", example: { good: "“Quiero entender cómo lo estás viendo tú antes de compartir mi lectura.”" } }
      ]
    },
    {
      id: 2,
      title: "Compartir datos con hechos, no juicios",
      status: "achieved",
      summary: "Usaste ejemplos concretos y métricas, separando hecho de interpretación.",
      did: "“En las últimas tres semanas, dos entregas se reabrieron por errores de QA. Eso es distinto a lo que veníamos haciendo.”",
      feedback: "Muy bien anclado en datos verificables. La frase “es distinto a lo que veníamos haciendo” evita etiquetar a la persona.",
      tips: [
        { text: "Cuando puedas, añade el impacto del hecho en el equipo o cliente.", example: { good: "“Esto generó dos horas extra de retrabajo para Andrés y un retraso al cliente.”" } }
      ]
    },
    {
      id: 3,
      title: "Validar emociones antes de proponer",
      status: "partial",
      summary: "Reconociste que “esto puede ser difícil” pero pasaste rápido a la solución.",
      did: "“Entiendo que es difícil escuchar esto. Bueno, lo importante es ver qué hacemos para mejorar.”",
      feedback: "El reconocimiento fue genuino pero breve. Saltar a “qué hacemos” en la misma frase puede leerse como apuro. Carla mostró señales de querer ser escuchada (silencio, tono más bajo) y la conversación habría ganado profundidad pausando ahí.",
      tips: [
        {
          text: "Haz una pregunta abierta y deja silencio antes de proponer.",
          example: {
            bad: "“Entiendo que es difícil. Bueno, ¿qué hacemos?”",
            good: "“Entiendo que es difícil. ¿Qué te está pasando con esto que estamos viendo?”"
          }
        }
      ]
    },
    {
      id: 4,
      title: "Explorar causas en conjunto",
      status: "achieved",
      summary: "Hiciste preguntas abiertas y resististe la tentación de diagnosticar.",
      did: "“¿Qué crees tú que está jugando un rol acá? ¿Hay algo del proceso que esté friccionando?”",
      feedback: "Muy buena exploración. Las preguntas abiertas y el “tú” devuelven agencia a la persona.",
      tips: [
        { text: "Si aparece una causa externa, valídala antes de evaluar su peso.", example: { good: "“Tiene sentido que el cambio de herramienta te haya costado. ¿Qué tanto crees que pesa hoy?”" } }
      ]
    },
    {
      id: 5,
      title: "Co-construir un plan",
      status: "partial",
      summary: "Propusiste tú la mayoría del plan; Carla aportó poco.",
      did: "“Te propongo que tengamos check-ins semanales y que Andrés te apoye en revisión. ¿Te parece?”",
      feedback: "El plan es razonable pero está construido por ti. Un “¿te parece?” cerrado no invita a co-crear. Pedirle a ella que proponga primero suele aumentar el compromiso real.",
      tips: [
        {
          text: "Pregunta qué necesitaría ella para estar segura del próximo paso.",
          example: { good: "“¿Qué necesitarías de mí o del equipo para sentir que esto se sostiene?”" }
        }
      ]
    },
    {
      id: 6,
      title: "Cierre con compromisos verificables",
      status: "missed",
      summary: "Cerraste con buena energía pero sin acuerdos concretos ni fecha de revisión.",
      did: "“Genial, entonces seguimos en contacto y cualquier cosa me dices. Que tengas buena tarde.”",
      feedback: "El tono fue cálido, pero faltó nombrar qué, quién y cuándo. Sin un punto de chequeo claro, el plan queda en buenas intenciones.",
      tips: [
        {
          text: "Cierra con una frase que liste compromiso + responsable + fecha.",
          example: {
            bad: "“Seguimos en contacto y cualquier cosa me dices.”",
            good: "“Quedamos en que tú revisas el flujo de QA esta semana y nos vemos el martes 14 a las 10:00 para mirarlo juntas. ¿Te hace sentido?”"
          }
        }
      ]
    }
  ],
  competencies: [
    { id: "coherencia",     label: "Coherencia",     score: 5, max: 5, note: "Tu discurso mantuvo una línea clara de principio a fin, sin contradicciones entre lo que planteaste y lo que sostuviste después." },
    { id: "relevancia",     label: "Relevancia",     score: 4, max: 5, note: "Te enfocaste en lo importante para la conversación. Evita extenderte en datos secundarios cuando ya hay una emoción activa en juego." },
    { id: "comprension",    label: "Comprensión",    score: 4, max: 5, note: "Demostraste entender el contexto y la situación de tu interlocutora. Profundiza un poco más en su perspectiva antes de proponer." },
    { id: "constructividad", label: "Constructividad", score: 3, max: 5, note: "Aportaste ideas accionables, pero el cierre quedó sin compromisos verificables. Termina siempre con qué, quién y cuándo." },
    { id: "objetividad",    label: "Objetividad",    score: 5, max: 5, note: "Excelente uso de hechos y datos verificables, separando observaciones de juicios." }
  ]
};

window.evaluationData = evaluationData;
