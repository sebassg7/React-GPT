import { MyMessage } from '../../components';
import { GptMessage } from '../../components';
import { TypingLoader } from '../../components';
export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2"></div>
          
          {/* Bienvenida */}
          <GptMessage text="¿Cómo estás? Encantado de ayudarte a corregir tus textos"/>

          <MyMessage text="Hola Mundo"/>
          
          <TypingLoader className="fade-in"/>
          
      </div>
    </div>
  )
}
