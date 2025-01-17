function SearchAndFilter({ onSearch, onFilter }) {
    return (
        <div>
            <input
                type="text"
                placeholder="ค้นหาผู้ใช้"
                onChange={(e) => onSearch(e.target.value)}
            />
            <select onChange={(e) => onFilter(e.target.value)}>
                <option value="">ทั้งหมด</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
        </div>
    );
}
