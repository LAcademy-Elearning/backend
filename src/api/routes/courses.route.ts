import express from 'express'
import validator from '../middlewares/validator'
import { contactValidation } from '../validations'
import { coursesController } from '../controllers'

const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: API for managing operations related to courses
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         message:
 *           type: string
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - message
 *
 *     NewContact:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         message:
 *           type: string
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - message
 */


/**
 * @swagger
 *  /api/v1/course:
 *   get:
 *     summary: Get all Courses
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
  *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error:  message
 */
router.get(
    '/',
    coursesController.getAllCourses
)
/**
 * @swagger
 *  /api/v1/course/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the Course
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
  *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error:  message
 */
router.get(
    '/:id',
    coursesController.getCourseById
)

/**
 * @swagger
 *  /api/v1/course:
 *   post:
 *     summary: Create a new Course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewContact'
 *     responses:
 *       '201':
 *         description: Contact created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
  *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error:  message
 */
router.post(
    '/',
    validator.body(contactValidation.createContact),
    coursesController.createCourse
)

/**
 * @swagger
 *  /api/v1/course/{id}:
 *   put:
 *     summary: Update a Course
 *     tags: [Courses]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the Course
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewContact'
 *     responses:
 *       '200':
 *         description: Updated Contact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
  *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error:  message
 */
router.put(
    '/:id',
    coursesController.updateCourses
)

/**
    * @swagger
    *  /api/v1/course/{id}:
    *   delete:
    *     summary: Delete a Course
    *     tags: [Courses]
    *     parameters:
    *       - name: id
    *         in: path
    *         description: ID of the Course
    *         required: true
    *         schema:
    *           type: string
    *     responses:
    *       '204':
    *         description: Course deleted
     *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error:  message
    */
router.delete(
    '/:id',
    coursesController.deleteCourses
)

export default router
