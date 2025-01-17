function UserForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState(user || { name: '', email: '', role: 'User' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
            <div>
                <label>ชื่อผู้ใช้</label>
                <input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>อีเมล</label>
                <input name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>บทบาท</label>
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>
            <button type="button" onClick={() => onSave(formData)}>บันทึก</button>
            <button type="button" onClick={onCancel}>ยกเลิก</button>
        </form>
    );
}
