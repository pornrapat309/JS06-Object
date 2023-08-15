const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };


  function fineEmployee(name) {
    const employee = employees[name];
    if (employee) {
        const {salary, address} = employee;
        const {district, province} = address;
        return(`Name: ${name}, salary: ${salary}, address: ${district}, ${province}`);
    } else return ('Not Found');
  }

  const input = prompt('Enter name');
  for (let name in employees) {
    if (name === input) {
        let result = fineEmployee(input);
        alert(result);
        break;
    }
  }
  if (!employees[input]) {
    alert('Not Found');
  }

