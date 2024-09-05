import { ThreeDots } from "react-loader-spinner";

function Loader() {
    return (
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="var(--dark-blue-color)"
            radius="16"
            ariaLabel="three-dots-loading"
            wrapperClass="loader-wrapper"
        />
    );
}

export default Loader;
