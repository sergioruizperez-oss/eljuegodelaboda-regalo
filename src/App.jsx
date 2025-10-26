import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function RegaloSorpresa() {
  const opcionesBase = [
    { id: 1, titulo: 'Ceremonia, curso y cata de té', descripcion: 'Esta opción fue bastante popular en la encuesta: cinco personas pensaron que era la mejor idea. La idea es que os sumerjáis en la Ceremonia China del té. Dejaos seducir por la magia de este encuentro de sensaciones propio del universo mandarín. Iréis a Majadahonda y Hon-Chi-Li os ofrecerá hacer la ceremonia en mesa baja o en mesa convencional. Durará unas dos horas y os regalarán una caja de veinticinco kilos de té verde.\n\nEstaría guay, ¿verdad? Pero va a ser que no, queridos...' },
    { id: 2, titulo: 'Un paseo en globo', descripcion: 'La opción más votada de todas... Iréis a Aranjuez para vivir una experiencia inolvidable sobrevolando paisajes espectaculares al amanecer. Despegaremos a trescientos metros del Palacio Real de Aranjuez y sus jardines, a orillas del río Tajo. Si Rosalía es capaz de ponerse de pie en la cesta podrá ver los Jardines del Príncipe y las Plazas de Parejas y la Mariblanca. Menos mal que nos avisaron vuestros colegas de que ni de pie ni sentada la Lili se va a montar ahí. Así que os vais a librar... tampoco será esta 😏' },
    { id: 3, titulo: 'Un curso para cocinar sushi', descripcion: 'Un par de personas, sospechamos que con la oscura intención de ser invitados a una cena en el Barrio del Pilar, pensaron que estaría bien que Haruto os enseñe a preparar makis y nigiris con anchoas de lata como si fuerais itamaes en Kioto. Se acabaron los deliveries de cuarenta pavos para quedaros con más hambre que el primero que comió caracoles, aunque, ejem, tampoco es este vuestro regalo de boda.' },
    { id: 4, titulo: 'Un curso de conducción deportiva / 4x4', descripcion: 'Seguramente alguno de los que os acompañan en vuestras aventuras por Marruecos pensó que estaría bien esto. Podréis elegir entre el Toyota de Rosalía, un Renault Supercinco que usaron en *El Pico 2* o un Seat 131 Supermirafiori que perteneció a Manolo Escobar. Derrapes, adrenalina, motores rugiendo... Ya os gustaría, pero no es lo que quiso el pueblo, así que NO.' },
    { id: 5, titulo: 'Una cena en un restaurante con estrella Michelin', descripcion: 'El o la que votó por esto fue muy generoso, sobre todo porque no le tocaba apoquinar al final. Cuenta la leyenda que en el Barrio del Pilar hay un restaurante secreto escondido en una cuarta planta en el que se come mejor que en el Bulli. Os llevará la compra un *courier* del Aldi y Rafa pondrá los cuchillos, ollas y cazuelas. Alta cocina, ambiente íntimo y sabores únicos. Sin lugar a duda mi opción preferida por ser la más barata, pero triunfó la democracia y tendremos que gastarnos los jureles y será otra cosa.' },
    { id: 6, titulo: 'Un escape room', descripcion: 'En estos juegos hay que ser estratégico. Está comprobado que si te comes un plato de cocido antes de entrar, en el momento que te roes el grupo pasa a tardar de hacer los puzzles en 5 minutos a completarlos en 30 segundos con tal de huir de la peste. Perfecto para poner a prueba vuestra inteligencia y capacidad de aguante... aunque no será necesario, porque no es este 😅' },
    { id: 7, titulo: 'Un safari fotográfico', descripcion: 'Aunque aclaramos que el viaje fotográfico sería en Toledo y no en Kenia, hubo alguien a quien le moló la idea igualmente. Por lo visto allí hay un zoológico y una vez se escapó un león. La gente empezó a decir: “¡Al cojo, cómete al cojo!”. Y el cojo respondió: “Quillo, no le comáis la moral al león, que se coma al que quiera”. Así que no, tampoco vais a Toledo.' },
    { id: 8, titulo: 'Entradas para el concierto de Katy Perry', descripcion: 'Katheryn Elizabeth Hudson va a Madrid. Las entradas son VIP, así que incluyen una visita al *backstage* y cinco minutos a solas con Orlando Bloom. Por lo visto, la buena de Catalina usa un cepillo quitapelusas en la ropa antes de dormir y también se lo pasa por los pies. Somos conscientes de que este es un dato que no aporta nada a vuestra vida de casados, pero seguramente os alegrará saber que no, no tenéis que tragaros 143 en directo.' },
    { id: 9, titulo: 'Entradas + hotel para el Parque Warner', descripcion: 'Un fin de semana lleno de diversión con alojamiento incluido. Incluye un pase Correcaminos y desayuno, almuerzo y cena en las hamburgueserías del parque. Si superáis la salmonelosis, vuestra vida no volverá a ser igual. Menos mal que esta opción no la votó ni el Tato, así que os vais a librar.' },
    { id: 10, titulo: 'Taller de vermuts con gildas y a lo loco', descripcion: 'En este taller en la Escuela de Coctelería de Madrid aprenderéis a crear vermuts personalizados con ingredientes frescos y emocionantes (vete tú a saber qué son ingredientes emocionantes). Descubrid los secretos de la elaboración de las clásicas gildas de manera única. Después de tres cócteles le pondréis los ingredientes de la gilda al cóctel y se os quitarán las ganas de hacer esto... y las tonterías también. Menos mal que es otro plan que no tuvo ninguna acogida.' },
    { id: 11, titulo: 'Viaje de fin de semana', descripcion: '¡Espectacular! Lo habéis acertado, sois unos verdaderos cracks, estamos muy orgullosos de vosotros. Efectivamente, vuestro regalo de boda es un fin de semana fuera de casa con todos los gastos incluidos.\n\nVais a salir de casa el viernes 21 de noviembre a las 12 del mediodía y no volveréis hasta las 21:00 del domingo 23 de noviembre. Como os habéis portado tan bien con los juramentos, os vamos a decir a dónde vais. Vais a viajar a... un momento, un momento, nos comunican desde la sala de control que no podemos decir dónde. Vaya por Dios, menuda contrariedad. Bueno, pues nada, habrá que esperar un poco más. ¿Cuánto tiempo? A saber, esto del Juego de la Boda es un poco puñetero. ¡Ánimo!' }
  ];

  const [opciones, setOpciones] = useState([]);
  const [seleccion, setSeleccion] = useState(null);
  const [contador, setContador] = useState(0);
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const mezcladas = [...opcionesBase].sort(() => Math.random() - 0.5);
    setOpciones(mezcladas);
  }, []);

  const fechaActivacion = new Date('2025-11-09T15:00:00Z');

  useEffect(() => {
    const timer = setInterval(() => setFechaActual(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (contador > 0) {
      const timer = setInterval(() => setContador((c) => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [contador]);

  const formatoTiempo = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const esActivaOpcion11 = fechaActual >= fechaActivacion;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-300 p-4 text-center">
      {!seleccion ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4">Bueno, después de la consulta popular hemos decidido colectivamente que no queremos haceros sufrir tanto...</h1>
          <p className="mb-6">Así que os vamos a decir cuál es el regalo. Las opciones que habíamos barajado eran las siguientes:</p>
          <div className="grid gap-3">
            {opciones.map((op) => {
              if (op.id === 11 && !esActivaOpcion11) return null;
              const estiloExtra = op.id === 11 && esActivaOpcion11 ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-2xl font-bold' : 'bg-emerald-600 hover:bg-emerald-700';
              return (
                <Button
                  key={op.id}
                  className={`w-full text-white ${estiloExtra}`}
                  onClick={() => contador === 0 && setSeleccion(op)}
                  disabled={contador > 0}
                >
                  {op.titulo}
                </Button>
              );
            })}
          </div>
          {contador > 0 && (
            <p className="mt-4 text-sm text-gray-700">
              Vaya, pues resulta que tampoco era ese el regalo. Pero no os preocupéis, podréis elegir otra opción pronto, exactamente en {formatoTiempo(contador)}.
            </p>
          )}
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md w-full">
          <Card className="p-4 bg-white shadow-xl rounded-2xl">
            <CardContent>
              <h2 className="text-xl font-bold mb-2">{seleccion.titulo}</h2>
              <p className="text-gray-700 whitespace-pre-line">{seleccion.descripcion}</p>
              <Button
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => {
                  setSeleccion(null);
                  setContador(86400);
                }}
              >
                Volver al menú principal
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
