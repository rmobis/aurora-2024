import './App.css';
import ExternalLinkIcon from './ExternalLinkIcon';


function App() {
	return (
		<div className="container relative p-4 mx-auto xl:px-24 lg:px-16">
			<header className="flex flex-col items-center gap-8 mt-12 ">
				<div>
					<img className="pr-8" src="/title.png" alt="Aurora 7 anos" />
					<img className="absolute top-0 right-0 w-1/4 pt-4 pl-4 -scale-x-100 z-[-1]" src="/ariel.png" alt="Ariel" />
				</div>
				<div className="text-5xl leading-[0.75] flex flex-col gap-4 text-center text-pretty lg:text-6xl">
					<p>Uma data especial precisa de uma companhia especial.</p>
					<p>Venha comemorar comigo no fundo do mar!</p>
					<p>Dia 05/10/2024 às 19:30h</p>
				</div>
			</header>

			<main className="pt-12">
				<section className="mb-16 text-center">
					<h2 className="text-4xl">
						<a href="https://www.buffetazuldomar.com.br" target="_blank">
							Buffet Azul do Mar
							<ExternalLinkIcon />
						</a>
					</h2>
					<span className="text-2xl">Rua Javari, 668 - Mooca</span>
				</section>

				<section className="flex flex-row items-start text-center">
					<img className="w-2/5" src="/tritao.png" alt="Tritão" />
					<div>
						<a href="#" className="mb-4 call-to-action leading-[0.75] no-underline flex gap-[.25em] text-5xl lg:text-8xl w-min items-center mx-auto">
							<span>»</span>
							<span>Confirmar Presença</span>
							<span>«</span>
						</a>
						<div className="flex flex-col gap-2 text-pretty lg:text-2xl">
							<p>Confirme a presença para que nossa festa possa ser perfeita</p>

							<p>
								Caso tenha alguma dúvida é só entrar em contato pelo WhatsApp <a
									href="https://api.whatsapp.com/send?phone=5511999110266&text=Oi!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20festa%20da%20Aurora."
									target="_blank"
								>(11) 99911-0266</a>
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
