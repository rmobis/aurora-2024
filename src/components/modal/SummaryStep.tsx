import { useWizard } from 'react-use-wizard';
import { Attendee } from './WizardModal';
import TrashCan from '../TrashCan';

export type Props = {
	attendees: Attendee[];
	removeAttendee: (index: number) => void;
};

export default function SummaryStep({ attendees, removeAttendee }: Props) {
	const { nextStep, goToStep } = useWizard();

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Para confirmar, está todo mundo aí?</h1>
			</div>

			<div className="flex flex-col gap-2">
				{attendees.map((attendee, k) => (
					<div key={attendee.name} className="flex flex-row justify-between w-full p-2 text-2xl font-thin bg-teal-600 rounded-lg">
						<div>
							{attendee.name}
							<p className="text-lg italic">{attendee.age}</p>
						</div>
						<button onClick={() => removeAttendee(k)}>
							<TrashCan />
						</button>
					</div>
				))}

				<button className="w-full p-2 text-2xl font-thin bg-teal-600 rounded-lg" onClick={() => goToStep(1)}>
					Adicionar Acompanhante
				</button>
			</div>

			<button className="w-full p-2 mt-10 text-4xl font-thin bg-teal-600 rounded-lg" onClick={() => nextStep()}>
				Sim, tudo certo!
			</button>
		</div>
	);
}
