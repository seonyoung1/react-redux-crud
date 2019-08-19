import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as manageActions from "../store/modules/manage";
import Form from "../components/Form";

const UpdateContainer = ({ ManageActions, inputTitle, inputDesc, mode, contents, current }) => {

    useEffect(() => {
        ManageActions.changeInputTitle(contents[current].title);
        ManageActions.changeInputDesc(contents[current].desc);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        ManageActions.updateList(
            contents[current].id,
            inputTitle,
            inputDesc
        );
        ManageActions.changeInputTitle("");
        ManageActions.changeInputDesc("");
        ManageActions.modeChange("read");
        //console.log(inputTitle, inputDesc);
    };
    const handleChangeTitle = e => {
        ManageActions.changeInputTitle(e.target.value);
    };
    const handleChangeDesc = e => {
        ManageActions.changeInputDesc(e.target.value);
    };
    const handleMode = text => {
        ManageActions.modeChange(text);
    };
    return (
        <Form
            inputDesc={inputDesc}
            inputTitle={inputTitle}
            mode={mode}
            onChangeTitle={handleChangeTitle}
            onChangeDesc={handleChangeDesc}
            onSubmit={handleSubmit}
            onMode={handleMode}
        />
    );
};

const mapStateToProps = ({manage}) => ({
    contents: manage.contents,
    current: manage.current,
    mode: manage.mode,
    inputTitle: manage.inputTitle,
    inputDesc: manage.inputDesc,
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateContainer);