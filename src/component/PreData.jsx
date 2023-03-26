const PreData = ({setPreData}) => {
    const handleChange = (e) => {
        setPreData(e.target.value);
    };
    return (
        <textarea onChange={handleChange} />
    );
};

export default PreData;