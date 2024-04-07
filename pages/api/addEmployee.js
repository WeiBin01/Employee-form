import supabase from '../../supabaseClient';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, department, startDate, resignedDate, gender, dob } = req.body;

        try {
            // Insert new employee into the "employees" table
            const { data, error } = await supabase.from('employees').insert([
                { firstName, lastName, department, startDate, resignedDate, gender, dob },
            ]);

            if (error) {
                console.error('Error adding employee to database:', error.message);
                return res.status(500).json({ error: 'Error adding employee to database' });
            }

            return res.status(200).json({ success: true, data });
        } catch (error) {
            console.error('Error adding employee:', error.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(400).json({ error: 'Invalid request method' });
}
