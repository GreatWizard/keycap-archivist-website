import React from 'react';
import Modal from '../modal';

const SubmitNameModal = (props) => {
  const [suggestionName, setSuggestionName] = useState('');

  const submitName = (clwName) => {
    fetch('https://app.keycap-archivist.com/api/v2/submitName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: colorway.id, name: clwName }),
    }).catch((error) => {
      console.error('Error:', error);
      setShowErrorAlert(true);
    });

    setShowSuccessAlert(true);
  };
  
  return (
    <Modal header={props.modalHeaders}>
      <input
        className="suggest__input bg-purple-white shadow rounded border-0 p-2 w-full"
        placeholder={props.placeholder}
        onChange={(event) => {
          props.setInputValue(event.target.value);
        }}
      ></input>
      <button
        className="
                    mx-2
                    block
                    w-20
                    bg-green-500
                    hover:bg-green-700
                    text-white
                    font-bold
                    py-2 px-3
                    text-xs
                    rounded"
        onClick={() => {
          props.onSubmit(props.inputValue);
          props.setModal(false);
        }}
      >
        Submit
      </button>
    </Modal>
  );
};

export default SubmitNameModal;
