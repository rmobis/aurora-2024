import { useWizard } from 'react-use-wizard';
import { Attendee } from './WizardModal';
import { InputMask } from '@react-input/mask';

export type Props = {
	isAttending: boolean;
	attendees: Attendee[];
	contactName: string | null;
	contactPhone: string | null;
	setContactName: React.Dispatch<React.SetStateAction<string | null>>;
	setContactPhone: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ContactStep({ isAttending, attendees, contactName, contactPhone, setContactName, setContactPhone }: Props) {
	const { nextStep, handleStep } = useWizard();

	async function submitForm() {
		await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
				access_key: '19548a65-1a8e-49c9-84e1-73bdde03f350',
				subject: 'New Attendance Confirmation',
				isAttending,
				attendees: attendees.map((attendee: Attendee) => `${attendee.name}: ${attendee.age}`).join('\n'),
				contactName,
				contactPhone
			})
        });
	}

	handleStep(submitForm);

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Quer receber um lembrete da festa?</h1>
				<p>Deixe seu contato!</p>
			</div>

			<div className="flex flex-col gap-2">
				<input className="p-1 text-2xl bg-teal-200 border-2 border-teal-500 border-solid rounded-lg" type="text" name="nome" placeholder="Nome" onChange={(e) => setContactName(e.target.value)} />
				<InputMask className="p-1 text-2xl bg-teal-200 border-2 border-teal-500 border-solid rounded-lg" type="phone" name="phone" placeholder="Telefone" mask="(__) _____-____" replacement={{ _: /\d/ }} onChange={(e) => setContactPhone(e.target.value)} />
			</div>

			<button
				className="w-full p-2 mt-10 text-4xl font-thin bg-teal-600 rounded-lg"
				onClick={() => nextStep()}
			>
				Confirmar
			</button>
		</div>
	);
}
