import './App.css';

function App() {
  return (
    <div className='page-container'>
      <header className='header'>
        <div className='title'>
          <img className='title-img' src='/title.png' alt='Aurora 7 anos' />
        </div>
        <nav className='menu'>
          <div className='menu-item'>
            <div>» </div>
            <div>Confirmar Presença</div>
            <div> «</div>
          </div>
          <div className='menu-item'>
            <div>» </div>
            <div>Recados</div>
            <div> «</div>
          </div>
          <div className='menu-item'>
            <div>» </div>
            <div>Contato</div>
            <div> «</div>
          </div>
        </nav>
      </header>
      <main className='main'>
        <section id='info-section'>
          <div className='info-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3829578306327!2d-46.60214438944995!3d-23.55468567871598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a6c36a81d2b%3A0x485326e85a788fb3!2sBuffet%20Azul%20Do%20Mar!5e0!3m2!1sen!2sbr!4v1724009130315!5m2!1sen!2sbr'
              width='100%'
              style={{ border: 0, aspectRatio: 4 / 3 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          <div className='info info-column-1'>
            <div className='info-piece'>
              <div className='info-title'>Quando?</div>
              <div className='info-text'>
                <p>Sábado, 05 de outubro</p>
                <p>das 19:30 até as 23:30h</p>
              </div>
            </div>
            <div className='info-piece'>
              <div className='info-title'>Onde?</div>
              <div className='info-text'>
                <p className='larger-text'>Buffet Azul do Mar</p>
                <p>Rua Javari, 668 - Mooca</p>
              </div>
            </div>
          </div>

          <div className='info info-column-2'>
            <div className='info-piece'>
              <div className='info-title'>Devo confirmar presença?</div>
              <div className='info-text'>
                Sim, por favor! Pedimos que confirme a presença de todos que participarão da festa. Para fazer isso,
                basta clicar no botão 'Confirmar Presença' acima e preencher o formulário. Caso tenha alguma dúvida, é
                só entrar em contato pelo WhatsApp{' '}
                <a
                  href='https://api.whatsapp.com/send?phone=5511999110266&text=Oi!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20festa%20da%20Aurora.'
                  target='_blank'
                >
                  (11) 98993 2556
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
