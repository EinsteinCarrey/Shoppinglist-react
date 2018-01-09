import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../helperComponents/TextInput';

const CreateListForm = ({list, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>

            <div className="form-group col-md-10">
                <TextInput
                    value={list.title}
                    onChange={onChange}
                    placeholder="Title"
                    name="title"/>
            </div>
            <div className="form-group col-md-2">
                <input
                    className="btn btn-primary"
                    disabled={loading}
                    type="submit"
                    value={loading ? 'Creating...' : 'Create'}
                />
            </div>
        </form>
    );
};

CreateListForm.propTypes = {
    list: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
};

export default CreateListForm;