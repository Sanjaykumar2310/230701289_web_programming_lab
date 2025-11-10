import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Chef',
    });
    const [touched, setTouched] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    //  Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    //  Handle blur for validation
    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };
    //  Validation logic
    const validate = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.mobileNumber) errors.mobileNumber = 'Mobile Number is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password && formData.password.length < 6)
        errors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword)
    errors.confirmPassword = 'Confirm Password is required';
else if (formData.password !== formData.confirmPassword)
errors.confirmPassword = 'Passwords do not match';
return errors;
    };
    const errors = validate();
    //  Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setTouched({
                firstName: true,
                lastName: true,
                mobileNumber: true,
                email: true,
                password: true,
                confirmPassword: true,
            });
            return;
        }
        try {
            await axios.post('/user/signup', formData);
            // Show success popup OR redirect
            setShowSuccessPopup(true);
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            navigate('/error');
        }
    };
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-box">
                        <h2>Register for Cookistry</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            {/* First Name */}
                            <div className="form-group">
                                <label>Fi
    )
        }
            })
        }
            })
        }
    }
    }
    }
    }
    })
}