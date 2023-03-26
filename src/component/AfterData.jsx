const AfterData = ({afterData}) => {
    return (
        <div>
            {afterData.map((data, index) => {
                return (
                    <div key={index}>
                        <span>{Array.isArray(data)?data.join(","):data}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default AfterData;