import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function App() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        watch();
    }, []);
    return (
        <div className="container mt-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First name"
                        {...register("firstName", {
                            required: "The name is required and must contain only letters",
                            pattern: /^([^0-9]*)$/,
                        })}
                    />
                    {errors.firstName?.message && (
                        <Form.Text className="text-danger">
                            {errors.firstName?.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last name"
                        {...register("lastName", {
                            required: "Last name is required",
                            pattern: /^([^0-9]*)$/,
                        })}
                    />
                    {errors.lastName?.message && (
                        <Form.Text className="text-danger">
                            {errors.lastName?.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Phone number"
                        {...register("phoneNumber", {
                            required:
                                "Phone number with Ukrainian (+380) code is required",
                            pattern:
                                /^\+380?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        })}
                    />
                    {errors.phoneNumber?.message && (
                        <Form.Text className="text-danger">
                            {errors.phoneNumber?.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email", {
                            required: "Correct email is required",
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    <Form.Text
                        className={`${
                            errors.email?.message ? "text-danger" : "text-muted"
                        }`}
                    >
                        {errors.email?.message ||
                            "We'll never share your email with anyone else"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "password is required and must contain minimum 8 digits, one capital letter and one symbol",
                            pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                        })}
                    />
                    {errors.password?.message && (
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("repeatPassword", {
                            required: "Repeat password is required",
                            validate: (value) =>
                                value === getValues("password") ||
                                "the passwords do not match",
                        })}
                    />
                    {errors.repeatPassword?.message && (
                        <Form.Text className="text-danger">
                            {errors.repeatPassword?.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <select {...register("City", { required: "City is required" })}>
                        <option value="Odesa">Odesa</option>
                        <option value="Kyiv">Kyiv</option>
                        <option value="Lviv">Lviv</option>
                        <option value="Kharkiv">Kharkiv</option>
                    </select>
                    {errors.City?.message && (
                        <Form.Text className="text-danger">
                            {errors.City?.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Check me out"
                        {...register("check")}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={!getValues("check")}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default App;
