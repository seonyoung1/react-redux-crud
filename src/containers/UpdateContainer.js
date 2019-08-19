import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as manageActions from "../modules/manage";
import Form from "../components/Form";

const UpdateContainer = ({ ManageActions, mode, contents, current }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        setTitle(contents[current].title);
        setDesc(contents[current].desc);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        ManageActions.updateList(
            contents[current].id,
            title,
            desc
        );
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
)(UpdateContainer);