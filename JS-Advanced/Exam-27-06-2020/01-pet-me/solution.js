function solve() {
  const adoptionSection = document.querySelector('#adoption > ul');
  const adoptedSection = document.querySelector('#adopted > ul');

  const inputDiv = [...document.querySelectorAll('input')];

  const inputName = inputDiv[0];
  const inputAge = inputDiv[1];
  const inputKind = inputDiv[2];
  const inputCurrOwner = inputDiv[3];

  document.querySelector('#container').addEventListener('click', addPet);

  function addPet(e) {
    e.preventDefault();

    const petName = inputName.value.trim();
    const petAge = inputAge.value.trim();
    const petKind = inputKind.value.trim();
    const petCurrOwner = inputCurrOwner.value.trim();

    if (
      petName.length > 0 &&
      isNaN(petAge) == false &&
      petAge > 0 &&
      petKind.length > 0 &&
      petCurrOwner.length > 0
    ) {
      const contactBtn = createHTMLelement('button', 'Contact with owner');
      const yesBtn = createHTMLelement('button', 'Yes! I take it!');

      const pet = createHTMLelement('li', [
        createHTMLelement('p', [
          createHTMLelement('strong', petName),
          ' is a ',
          createHTMLelement('strong', petAge),
          ' year old ',
          createHTMLelement('strong', petKind),
        ]),
        createHTMLelement('span', `Owner: ${petCurrOwner}`),
        contactBtn,
      ]);

      const inputNewText = createHTMLelement('input', '');

      inputNewText.placeholder = 'Enter your names';

      const newDiv = createHTMLelement('div', [inputNewText, yesBtn]);

      adoptionSection.appendChild(pet);

      contactBtn.addEventListener('click', () => {
        contactBtn.remove();
        pet.appendChild(newDiv);
      });

      yesBtn.addEventListener('click', () => {
        const newOwnerName = inputNewText.value.trim();
        const checkedBtn = createHTMLelement('button', 'Checked');

        if (newOwnerName.length > 0) {
          const newPet = createHTMLelement('li', [
            createHTMLelement('p', [
              createHTMLelement('strong', petName),
              ' is a ',
              createHTMLelement('strong', petAge),
              ' year old ',
              createHTMLelement('strong', petKind),
            ]),
            createHTMLelement('span', `New Owner: ${newOwnerName}`),
            checkedBtn,
          ]);

          pet.remove();
          adoptedSection.appendChild(newPet);

          checkedBtn.addEventListener('click', () => {
            newPet.remove();
          });
        }
      });

      inputName.value = '';
      inputAge.value = '';
      inputKind.value = '';
      inputCurrOwner.value = '';
    }
  }

  function createHTMLelement(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
      Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
      content.forEach(append);
    } else {
      append(content);
    }

    function append(node) {
      if (typeof node === 'string') {
        node = document.createTextNode(node);
      }
      result.appendChild(node);
    }

    return result;
  }
}
