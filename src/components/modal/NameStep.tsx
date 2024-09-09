import { useWizard } from 'react-use-wizard';

export type Props = {
	isAttending: boolean;
	curAttendee: string | null;
	setCurAttendee: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function NameStep({ isAttending, curAttendee, setCurAttendee }: Props) {
	const { nextStep, goToStep } = useWizard();

	async function submitForm() {
		await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				access_key: 'e60721d7-49a1-4c13-95f6-6e1106721d11',
				subject: 'Presença Desconfirmada',
				confirmado: isAttending ? 'sim' : 'não',
				nome: curAttendee,
			})
        });
	}

	async function handleNext() {
		if (isAttending) {
			nextStep();
			return;
		}

		await submitForm();
		goToStep(5);
	}

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Nos diga quem você é</h1>
				<p>Vamos perguntar sobre seus acompanhantes na próxima etapa.</p>
			</div>

			<textarea
				className="box-content w-full py-5 text-6xl text-center outline-none"
				placeholder="Nome"
				rows={2}
				onChange={(e) => setCurAttendee(e.target.value)}
			/>

			<button
				className="w-full p-2 mt-10 text-4xl font-thin bg-teal-600 rounded-lg"
				disabled={curAttendee === '' || curAttendee === null}
				onClick={() => handleNext()}
			>
				Continuar
			</button>
		</div>
	);
}
