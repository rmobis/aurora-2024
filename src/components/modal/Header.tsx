import { useWizard } from 'react-use-wizard';

export type Props = {
	closeModal: () => void;
}

export default function Header({ closeModal }: Props) {
	const { goToStep } = useWizard();

	function close() {
		goToStep(0);
		closeModal();
	}

	return (
		<div className="flex flex-col items-end cursor-pointer" onClick={() => close()}>
			╳
		</div>
	);
}
