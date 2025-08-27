import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomInputButton = forwardRef(({ value, onClick, label, className }, ref) => (
    <button
        onClick={onClick}
        ref={ref}
        className={className || 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'}
    >
        {label}
    </button>
));

const BookingCalendar = ({
    selected,
    onChange,
    minDate = new Date(),
    timeIntervals = 30,
    label = 'Book Your Appointment',
    customInputText = 'Select Date & Time',
    customInputClass = '',
}) => {
    return (
        <div  >
            <DatePicker
                selected={selected}
                onChange={onChange}
                showTimeSelect
                timeIntervals={timeIntervals}
                minDate={minDate}
                dateFormat="MMMM d, yyyy h:mm aa"
                customInput={
                    <CustomInputButton label={customInputText} className={customInputClass} />
                }
            />
        </div>
    );
};

export default BookingCalendar;
