import { Course } from '../models'

const createCourse = async (body: {
	firstName: string
	lastName: string
	email: string
	password: string
}) => {
	const course = new Course(body)
	return await course.save()
}

const getCourseById = async (id: string) => {
	return Course.findById(id).exec()
}

const getAllCourses = async () => {
	return Course.find({}).exec()
}
const updateCourse = (id: string, body: Partial<{
	firstName: string
	lastName: string
	email: string
	message: string
}>) => {
	return Course.findByIdAndUpdate(id, { ...body }, { new: true })
}

const deleteCourse = async (id: string) => {
	await Course.findByIdAndDelete(id)
}
export default {
	getCourseById,
	getAllCourses,
	createCourse,
	updateCourse,
	deleteCourse
}
