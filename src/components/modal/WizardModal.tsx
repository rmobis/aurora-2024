import { useEffect, useRef, useState } from 'react';
import { Wizard } from 'react-use-wizard';
import Header from './Header';
import NameStep from './NameStep';
import AgeStep from './AgeStep';
import SummaryStep from './SummaryStep';
import SubmittedStep from './SubmittedStep';
import './WizardModal.css';
import IsAttendingStep from './IsAttendingStep';
import ContactStep from './ContactStep';

export type Props = {
	openModal: boolean;
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Attendee = {
	name: string;
	age: string;
};

export default function WizardModal({ openModal, setModalOpen }: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [isAttending, setIsAttending] = useState<boolean>(false);
	const [attendees, setAttendees] = useState<Attendee[]>([]);
	const [contactName, setContactName] = useState<string | null>(null);
	const [contactPhone, setContactPhone] = useState<string | null>(null);
	const [curAttendee, setCurAttendee] = useState<string | null>(null);


	useEffect(() => {
		if (openModal) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [openModal]);

	function closeModal() {
		setAttendees([]);
		setModalOpen(false);
	}

	function addAttendee(name: string, age: string) {
		setAttendees([...attendees, { name, age }]);
	}

	function removeAttendee(index: number) {
		console.log(index);
		console.log(attendees);
		console.log(attendees.filter((_, k) => k !== index))
		setAttendees(attendees.filter((_, k) => k !== index));
	}

	return (
		<dialog ref={dialogRef} className="w-full min-w-full min-h-full p-4 bg-transparent overscroll-contain">
			<div className="flex min-h-[calc(100dvh-2rem)] flex-col rounded-lg bg-white px-4 py-3">
				<Wizard header={<Header closeModal={closeModal} />} footer={<div></div>}>
					<IsAttendingStep setIsAttending={setIsAttending} />
					<NameStep setCurAttendee={setCurAttendee} curAttendee={curAttendee} />
					<AgeStep curAttendee={curAttendee} addAttendee={addAttendee} />
					<SummaryStep attendees={attendees} removeAttendee={removeAttendee} />
					<ContactStep
						isAttending={isAttending}
						attendees={attendees}
						contactName={contactName}
						contactPhone={contactPhone}
						setContactName={setContactName}
						setContactPhone={setContactPhone}
					/>
					<SubmittedStep />
				</Wizard>
			</div>
		</dialog>
	);
}
