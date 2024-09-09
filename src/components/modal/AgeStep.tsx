import { useWizard } from 'react-use-wizard';

const AGE_OPTIONS = ['Adulto/Adolescente', 'Criança 6-11 anos', 'Criança 0-5 anos'];

export type Props = {
	curAttendee: string | null;
	addAttendee: (name: string, age: string) => void;
};

export default function AgeStep({ curAttendee, addAttendee }: Props) {
	const { nextStep } = useWizard();

	function handleClick(name: string, age: (typeof AGE_OPTIONS)[number]) {
		addAttendee(name, age);
		nextStep();
	}

	if (curAttendee === null) {
		return;
	}

	return (
		<div className="flex flex-col justify-between text-center grow text-balance">
			<div>
				<h1 className="my-4 text-2xl font-bold">Nos diga a idade de {curAttendee}</h1>
			</div>

			<div>
				{AGE_OPTIONS.map((age) => (
					<button
						key={age}
						className="w-full p-2 mt-2 text-3xl font-thin bg-teal-600 rounded-lg"
						onClick={() => handleClick(curAttendee, age)}
					>
						{age}
					</button>
				))}
			</div>

			<div className="mt-20"></div>
		</div>
	);
}
