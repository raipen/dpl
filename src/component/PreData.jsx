const PreData = ({setPreData}) => {
    const handleChange = (e) => {
        setPreData(e.target.value);
    };
    return (
        <textarea onKeyUp={handleChange} />
    );
};

export default PreData;