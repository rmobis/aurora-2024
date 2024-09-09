import { useWizard } from 'react-use-wizard';

export type Props = {
	setIsAttending: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function IsAttendingStep({ setIsAttending }: Props) {
	const { nextStep } = useWizard();

	function confirmAttending() {
		setIsAttending(true);
		nextStep();
	}

	function denyAttending() {
		setIsAttending(false);
		nextStep();
	}

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Você poderá ir?</h1>
				<p>05 de Outubro às 19h30 - Buffet Azul do Mar</p>
			</div>

			<div className="flex flex-col gap-2">
				<button className="w-full p-2 text-2xl font-thin bg-teal-600 rounded-lg" onClick={() => confirmAttending()}>
					Eu vou! 😁
				</button>
				<button className="w-full p-2 text-2xl font-thin bg-teal-600 rounded-lg" onClick={() => denyAttending()}>
					Nao vou 😭
				</button>
			</div>

			<div className="mt-20"></div>
		</div>
	);
}
