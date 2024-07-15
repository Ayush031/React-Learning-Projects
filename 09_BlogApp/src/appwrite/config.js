import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, content, status, featuredImage, userId, slug }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDBId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, status, featuredImage, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDBId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDBId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.error("Error in deletePost")
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDBId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.error("Error in getPost")
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDBId,
                conf.appwriteCollectionId,
                queries,
                // pagination also avaialble from docs
            )
        } catch (error) {
            console.error("Error in getPosts")
            return false;
        }
    }

    // file uplaod service methods

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Appwrite uploadFile Error")
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("Appwrite deleteFile Error")
            return false;
        }
    }

    previewFile(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.error("Appwrite filePreview Error")
            return false;
        }
    }



}

const service = new Service();
export default service;