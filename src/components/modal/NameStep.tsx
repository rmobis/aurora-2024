import { useWizard } from 'react-use-wizard';

export type Props = {
	curAttendee: string | null;
	setCurAttendee: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function NameStep({ curAttendee, setCurAttendee }: Props) {
	const { nextStep } = useWizard();

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
				onClick={() => nextStep()}
			>
				Continuar
			</button>
		</div>
	);
}
