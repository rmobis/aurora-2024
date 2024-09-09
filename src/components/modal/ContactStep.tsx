import { useWizard } from 'react-use-wizard';
import { Attendee } from './WizardModal';
import { InputMask } from '@react-input/mask';

export type Props = {
	isAttending: boolean;
	attendees: Attendee[];
	contactPhone: string | null;
	setContactPhone: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ContactStep({ isAttending, attendees, contactPhone, setContactPhone }: Props) {
	const { nextStep, handleStep, isLoading } = useWizard();

	async function submitForm() {
		await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				access_key: 'e60721d7-49a1-4c13-95f6-6e1106721d11',
				subject: 'Presença Confirmada',
				confirmado: isAttending ? 'sim' : 'não',
				convidados: attendees.map((attendee: Attendee) => `${attendee.name}: ${attendee.age}`).join('\n'),
				telefone: contactPhone
			})
        });
	}

	handleStep(submitForm);

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Quer receber um lembrete da festa?</h1>
				<p>Deixe seu telefone!</p>
			</div>

			<InputMask
				className="box-content w-full py-5 text-4xl text-center outline-none"
				placeholder="(__) _____-____"
				type="text"
				onChange={(e) => setContactPhone(e.target.value)}
				mask="(__) _____-____"
				showMask={true}
				replacement={{ _: /\d/ }}
			/>

			<button
				className="w-full p-2 mt-10 text-4xl font-thin bg-teal-600 rounded-lg"
				onClick={() => nextStep()}
				disabled={isLoading}
			>
				Confirmar
			</button>
		</div>
	);
}
