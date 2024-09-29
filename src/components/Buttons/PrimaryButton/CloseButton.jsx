const CloseButton = ({clickFunc}) => {
    return (
        <button style={{background: "none", border: "none"}} onClick={clickFunc}>
            <svg
                style={{fontSize: "1.25rem"}}
                width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5758 16.4243C15.8101 16.6586 16.19 16.6586 16.4244 16.4243C16.6587 16.19 16.6587 15.8101 16.4244 15.5758L10.8485 9.99993L16.4242 4.42429C16.6585 4.18997 16.6585 3.81007 16.4242 3.57576C16.1899 3.34145 15.81 3.34145 15.5756 3.57576L10 9.1514L4.42436 3.57576C4.19005 3.34145 3.81015 3.34145 3.57583 3.57576C3.34152 3.81007 3.34152 4.18997 3.57583 4.42429L9.15147 9.99993L3.57564 15.5758C3.34132 15.8101 3.34132 16.19 3.57564 16.4243C3.80995 16.6586 4.18985 16.6586 4.42417 16.4243L10 10.8485L15.5758 16.4243Z" fill="#000C2D">
                    </path>
            </svg>
        </button>
    )
};

export default CloseButton;