
const habits = []

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const habit = {
        id: Date.now(),
        name: data.get('name'),
        frequency: data.get('frequency'),
    };

    habits.push(habit);
}