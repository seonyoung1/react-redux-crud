import React from 'react';
import Form from "../components/Form";
import {bindActionCreators} from "redux";
import * as manageActions from "../modules/manage";
import {connect} from "react-redux";

const CreateContainer = ({ ManageActions, mode, inputTitle, inputDesc, contents  }) => {
    const handleSubmit = e => {
        e.preventDefault();
        ManageActions.createList(
            inputTitle,
            inputDesc
        );
        ManageActions.select(contents.length);
        ManageActions.modeChange("read");
        ManageActions.changeInputTitle("");
        ManageActions.changeInputDesc("");
    };
    const handleChangeTitle = e => {
        ManageActions.changeInputTitle(e.target.value);
    };
    const handleChangeDesc = e => {
        ManageActions.changeInputDesc(e.target.value);
    };
    const handleChange = e => {
        ManageActions.changeInput({[e.target.name] : e.target.value});
        //[e.target.name] : e.target.value
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
    input: manage.input,
    inputTitle: manage.inputTitle,
    inputDesc: manage.inputDesc,
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer);