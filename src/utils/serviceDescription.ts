import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Reads HTML content from a service description file
 * @param filePath - Path to the HTML file (e.g., "@/locales/tr/services/WebApplication.html")
 * @returns HTML content as string
 */
export async function getServiceDescription(filePath: string): Promise<string> {
    // Remove @ prefix if present and convert to actual file path
    const cleanPath = filePath.startsWith('@/') 
        ? filePath.replace('@/', '') 
        : filePath;
    
    // Resolve the path relative to project root
    const fullPath = join(process.cwd(), 'src', cleanPath);
    
    try {
        const content = await readFile(fullPath, 'utf-8');
        return content;
    } catch (error) {
        console.error(`Error reading service description file: ${fullPath}`, error);
        return '';
    }
}

