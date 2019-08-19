import React, { useState } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as manageActions from "../modules/manage";
import Form from "../components/Form";

const CreateContainer = ({ ManageActions, mode, inputTitle, inputDesc, contents  }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        ManageActions.createList(
            title,
            desc
        );
        ManageActions.select(contents.length);
        ManageActions.modeChange("read");
    };
    const handleChangeTitle = e => {
        //ManageActions.changeInputTitle(e.target.value);
        setTitle(e.target.value);
    };
    const handleChangeDesc = e => {
        //ManageActions.changeInputDesc(e.target.value);
        setDesc(e.target.value);
    };
    const handleMode = text => {
        ManageActions.modeChange(text);
    };
    return (
        <Form
            title={title}
            desc={desc}
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
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer);