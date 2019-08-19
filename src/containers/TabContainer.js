import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tab from "../components/Tab";
import UpdateContainer from "./UpdateContainer";
import * as manageActions from "../store/modules/manage";

const TabContainer = ({ ManageActions, mode, current, contents, }) => {
    const handleSelect = current => {
        ManageActions.select(current);
    };
    return (
        <>
            {mode === "welcome" && <p className="welcome">컨텐츠를 추가하세요!</p>}
            {mode === "update" && <UpdateContainer /> }
            {(mode !== "update" && mode !== "welcome" ) &&
            <Tab
                mode={mode}
                current={current}
                contents={contents}
                onSelect={handleSelect}
            />
            }
        </>
    );
};

const mapStateToProps = ({manage}) => ({
    contents: manage.contents,
    current: manage.current,
    mode: manage.mode,
    input: manage.input,
    inputTitle: manage.inputTitle,
    inputDesc: manage.inputDesc,
});

// const mapDispatchToProps = dispatch => ({
//     select: current => dispatch(select(current)),
// });
const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContainer);