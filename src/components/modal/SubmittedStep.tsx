export type Props = {
	isAttending: boolean;
}

export default function SubmittedStep({ isAttending }: Props) {
	const attendingBody = <>
		<p>Sua presença nos fará muito felizes e vamos nos divertir até cansar</p>
		<p>Se tiver algum imprevisto ou precisar alterar qualquer informação é só mandar uma mensagem para a vovó <a
				href="https://api.whatsapp.com/send?phone=5511999110266&text=Oi!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20festa%20da%20Aurora."
				target="_blank"
			>(11) 99911-0266</a>
		</p>

		<p>Espero vocês</p>
		<p>Beijos</p>
		<p>Aurora</p>
	</>;

	const notAttendingBody = <>
		<p>Vamos sentir sua falta, mas não faltarão oportunidades para nos divertirmos juntos</p>
		<p>Se precisar alterar essa informação é só mandar uma mensagem para a vovó <a
				href="https://api.whatsapp.com/send?phone=5511999110266&text=Oi!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20festa%20da%20Aurora."
				target="_blank"
			>(11) 99911-0266</a>
		</p>

		<p>Beijos</p>
		<p>Aurora</p>
	</>;

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">{isAttending ? 'Obrigada por confirmar' : 'Que pena!'}</h1>
				{ isAttending ? attendingBody : notAttendingBody}
			</div>
		</div>
	);
}
