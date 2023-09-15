import React, { useState } from 'react';
import './App.css';

function App() {
    const [records, setRecords] = useState([]);
    const [exercitiu, setExercitiu] = useState('');
    const [grupaMusculara, setGrupaMusculara] = useState('');
    const [greutate, setGreutate] = useState('');
    const [repetari, setRepetari] = useState('');
    const [seturi, setSeturi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {
            id: records.length + 1,
            data: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
            exercitiu,
            grupaMusculara,
            greutate,
            repetari,
            seturi
        };

        setRecords([...records, newRecord]);
    };

    return (
      <div className='content-wrapper'>
        <div className='card'>
            <form onSubmit={handleSubmit} className='exercise-form'>
                <label className='exercise-form__label'>
                    Exercitiu:
                    <input type="text" value={exercitiu} onChange={(e) => setExercitiu(e.target.value)} className='exercise-form__input'/>
                </label>
                <label className='exercise-form__label'>
                    Grupa Musculara:
                    <input type="text" value={grupaMusculara} onChange={(e) => setGrupaMusculara(e.target.value)} className='exercise-form__input'/>
                </label>
                <label className='exercise-form__label'>
                    Greutate:
                    <input type="number" value={greutate} onChange={(e) => setGreutate(e.target.value)} className='exercise-form__input'/>
                </label>
                <label className='exercise-form__label'>
                    Repetari:
                    <input type="number" value={repetari} onChange={(e) => setRepetari(e.target.value)} className='exercise-form__input'/>
                </label>
                <label className='exercise-form__label'>
                    Seturi:
                    <input type="number" value={seturi} onChange={(e) => setSeturi(e.target.value)} className='exercise-form__input'/>
                </label>
                <button type="submit" className='exercise-form__button'>Adauga</button>
            </form>
            </div>
            <div className='card'>
            <table border="1" className='exercise-table'>
                <thead className='exercise-table-thead'>
                    <tr className='exercise-table-head-tr'>
                        <th className='exercise-table-head-tr-th'>ID</th>
                        <th className='exercise-table-head-tr-th'>Data</th>
                        <th className='exercise-table-head-tr-th'>Exercitiu</th>
                        <th className='exercise-table-head-tr-th'>Grupa Musculara</th>
                        <th className='exercise-table-head-tr-th'>Greutate</th>
                        <th className='exercise-table-head-tr-th'>Repetari</th>
                        <th className='exercise-table-head-tr-th'>Seturi</th>
                    </tr>
                </thead>
                <tbody className='table-tbody'>
                    {records.map(record => (
                        <tr key={record.id} className='table-tbody-tr'>
                            <td className='exercise-table-tbody-tr-td'>{record.id}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.data}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.exercitiu}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.grupaMusculara}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.greutate}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.repetari}</td>
                            <td className='exercise-table-tbody-tr-td'>{record.seturi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default App;

