function UserList({ users, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ชื่อผู้ใช้</th>
                    <th>อีเมล</th>
                    <th>บทบาท</th>
                    <th>การกระทำ</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>แก้ไข</button>
                            <button onClick={() => onDelete(user.id)}>ลบ</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
